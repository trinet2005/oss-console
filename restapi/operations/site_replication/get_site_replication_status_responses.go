// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
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
//

package site_replication

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/trinet2005/oss-console/models"
)

// GetSiteReplicationStatusOKCode is the HTTP code returned for type GetSiteReplicationStatusOK
const GetSiteReplicationStatusOKCode int = 200

/*
GetSiteReplicationStatusOK A successful response.

swagger:response getSiteReplicationStatusOK
*/
type GetSiteReplicationStatusOK struct {

	/*
	  In: Body
	*/
	Payload *models.SiteReplicationStatusResponse `json:"body,omitempty"`
}

// NewGetSiteReplicationStatusOK creates GetSiteReplicationStatusOK with default headers values
func NewGetSiteReplicationStatusOK() *GetSiteReplicationStatusOK {

	return &GetSiteReplicationStatusOK{}
}

// WithPayload adds the payload to the get site replication status o k response
func (o *GetSiteReplicationStatusOK) WithPayload(payload *models.SiteReplicationStatusResponse) *GetSiteReplicationStatusOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get site replication status o k response
func (o *GetSiteReplicationStatusOK) SetPayload(payload *models.SiteReplicationStatusResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetSiteReplicationStatusOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
GetSiteReplicationStatusDefault Generic error response.

swagger:response getSiteReplicationStatusDefault
*/
type GetSiteReplicationStatusDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewGetSiteReplicationStatusDefault creates GetSiteReplicationStatusDefault with default headers values
func NewGetSiteReplicationStatusDefault(code int) *GetSiteReplicationStatusDefault {
	if code <= 0 {
		code = 500
	}

	return &GetSiteReplicationStatusDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get site replication status default response
func (o *GetSiteReplicationStatusDefault) WithStatusCode(code int) *GetSiteReplicationStatusDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get site replication status default response
func (o *GetSiteReplicationStatusDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get site replication status default response
func (o *GetSiteReplicationStatusDefault) WithPayload(payload *models.APIError) *GetSiteReplicationStatusDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get site replication status default response
func (o *GetSiteReplicationStatusDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetSiteReplicationStatusDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
