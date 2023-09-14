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

package idp

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/trinet2005/oss-console/models"
)

// DeleteConfigurationOKCode is the HTTP code returned for type DeleteConfigurationOK
const DeleteConfigurationOKCode int = 200

/*
DeleteConfigurationOK A successful response.

swagger:response deleteConfigurationOK
*/
type DeleteConfigurationOK struct {

	/*
	  In: Body
	*/
	Payload *models.SetIDPResponse `json:"body,omitempty"`
}

// NewDeleteConfigurationOK creates DeleteConfigurationOK with default headers values
func NewDeleteConfigurationOK() *DeleteConfigurationOK {

	return &DeleteConfigurationOK{}
}

// WithPayload adds the payload to the delete configuration o k response
func (o *DeleteConfigurationOK) WithPayload(payload *models.SetIDPResponse) *DeleteConfigurationOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the delete configuration o k response
func (o *DeleteConfigurationOK) SetPayload(payload *models.SetIDPResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DeleteConfigurationOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
DeleteConfigurationDefault Generic error response.

swagger:response deleteConfigurationDefault
*/
type DeleteConfigurationDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewDeleteConfigurationDefault creates DeleteConfigurationDefault with default headers values
func NewDeleteConfigurationDefault(code int) *DeleteConfigurationDefault {
	if code <= 0 {
		code = 500
	}

	return &DeleteConfigurationDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the delete configuration default response
func (o *DeleteConfigurationDefault) WithStatusCode(code int) *DeleteConfigurationDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the delete configuration default response
func (o *DeleteConfigurationDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the delete configuration default response
func (o *DeleteConfigurationDefault) WithPayload(payload *models.APIError) *DeleteConfigurationDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the delete configuration default response
func (o *DeleteConfigurationDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DeleteConfigurationDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
