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

package user

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/trinet2005/oss-console/models"
)

// BulkUpdateUsersGroupsOKCode is the HTTP code returned for type BulkUpdateUsersGroupsOK
const BulkUpdateUsersGroupsOKCode int = 200

/*
BulkUpdateUsersGroupsOK A successful response.

swagger:response bulkUpdateUsersGroupsOK
*/
type BulkUpdateUsersGroupsOK struct {
}

// NewBulkUpdateUsersGroupsOK creates BulkUpdateUsersGroupsOK with default headers values
func NewBulkUpdateUsersGroupsOK() *BulkUpdateUsersGroupsOK {

	return &BulkUpdateUsersGroupsOK{}
}

// WriteResponse to the client
func (o *BulkUpdateUsersGroupsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*
BulkUpdateUsersGroupsDefault Generic error response.

swagger:response bulkUpdateUsersGroupsDefault
*/
type BulkUpdateUsersGroupsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewBulkUpdateUsersGroupsDefault creates BulkUpdateUsersGroupsDefault with default headers values
func NewBulkUpdateUsersGroupsDefault(code int) *BulkUpdateUsersGroupsDefault {
	if code <= 0 {
		code = 500
	}

	return &BulkUpdateUsersGroupsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the bulk update users groups default response
func (o *BulkUpdateUsersGroupsDefault) WithStatusCode(code int) *BulkUpdateUsersGroupsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the bulk update users groups default response
func (o *BulkUpdateUsersGroupsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the bulk update users groups default response
func (o *BulkUpdateUsersGroupsDefault) WithPayload(payload *models.APIError) *BulkUpdateUsersGroupsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the bulk update users groups default response
func (o *BulkUpdateUsersGroupsDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *BulkUpdateUsersGroupsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
