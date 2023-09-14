// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Package oauth2 contains all the necessary configurations to initialize the
// idp communication using oauth2 protocol
package oauth2

import (
	"crypto/sha1"
	"strconv"
	"strings"
	"time"

	"github.com/trinet2005/oss-console/pkg/auth/token"
	"github.com/trinet2005/oss-pkg/env"
	"golang.org/x/crypto/pbkdf2"
)

// ProviderConfig - OpenID IDP Configuration for console.
type ProviderConfig struct {
	URL                      string
	DisplayName              string // user-provided - can be empty
	ClientID, ClientSecret   string
	HMACSalt, HMACPassphrase string
	Scopes                   string
	Userinfo                 bool
	RedirectCallbackDynamic  bool
	RedirectCallback         string
	EndSessionEndpoint       string
	RoleArn                  string // can be empty
}

// GetStateKeyFunc - return the key function used to generate the authorization
// code flow state parameter.
func (pc ProviderConfig) GetStateKeyFunc() StateKeyFunc {
	return func() []byte {
		return pbkdf2.Key([]byte(pc.HMACPassphrase), []byte(pc.HMACSalt), 4096, 32, sha1.New)
	}
}

func (pc ProviderConfig) GetARNInf() string {
	return pc.RoleArn
}

type OpenIDPCfg map[string]ProviderConfig

func GetSTSEndpoint() string {
	return strings.TrimSpace(env.Get(ConsoleMinIOServer, "http://localhost:9000"))
}

func GetIDPURL() string {
	return env.Get(ConsoleIDPURL, "")
}

func GetIDPClientID() string {
	return env.Get(ConsoleIDPClientID, "")
}

func GetIDPUserInfo() bool {
	return env.Get(ConsoleIDPUserInfo, "") == "on"
}

func GetIDPSecret() string {
	return env.Get(ConsoleIDPSecret, "")
}

// Public endpoint used by the identity oidcProvider when redirecting
// the user after identity verification
func GetIDPCallbackURL() string {
	return env.Get(ConsoleIDPCallbackURL, "")
}

func GetIDPCallbackURLDynamic() bool {
	return env.Get(ConsoleIDPCallbackURLDynamic, "") == "on"
}

func IsIDPEnabled() bool {
	return GetIDPURL() != "" &&
		GetIDPClientID() != ""
}

// GetPassphraseForIDPHmac returns passphrase for the pbkdf2 function used to sign the oauth2 state parameter
func getPassphraseForIDPHmac() string {
	return env.Get(ConsoleIDPHmacPassphrase, token.GetPBKDFPassphrase())
}

// GetSaltForIDPHmac returns salt for the pbkdf2 function used to sign the oauth2 state parameter
func getSaltForIDPHmac() string {
	return env.Get(ConsoleIDPHmacSalt, token.GetPBKDFSalt())
}

// getIDPScopes return default scopes during the IDP login request
func getIDPScopes() string {
	return env.Get(ConsoleIDPScopes, "openid,profile,email")
}

// getIDPTokenExpiration return default token expiration for access token
func getIDPTokenExpiration() time.Duration {
	expiration := 12 * 3600
	if expStr := env.Get(ConsoleIDPTokenExpiration, ""); expStr != "" {
		if exp, err := strconv.Atoi(expStr); err == nil {
			expiration = exp
		}
	}

	return time.Duration(expiration) * time.Second
}
