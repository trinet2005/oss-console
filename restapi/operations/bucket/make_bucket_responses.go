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

package bucket

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/trinet2005/oss-console/models"
)

// MakeBucketOKCode is the HTTP code returned for type MakeBucketOK
const MakeBucketOKCode int = 200

/*
MakeBucketOK A successful response.

swagger:response makeBucketOK
*/
type MakeBucketOK struct {

	/*
	  In: Body
	*/
	Payload *models.MakeBucketsResponse `json:"body,omitempty"`
}

// NewMakeBucketOK creates MakeBucketOK with default headers values
func NewMakeBucketOK() *MakeBucketOK {

	return &MakeBucketOK{}
}

// WithPayload adds the payload to the make bucket o k response
func (o *MakeBucketOK) WithPayload(payload *models.MakeBucketsResponse) *MakeBucketOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the make bucket o k response
func (o *MakeBucketOK) SetPayload(payload *models.MakeBucketsResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *MakeBucketOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
MakeBucketDefault Generic error response.

swagger:response makeBucketDefault
*/
type MakeBucketDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewMakeBucketDefault creates MakeBucketDefault with default headers values
func NewMakeBucketDefault(code int) *MakeBucketDefault {
	if code <= 0 {
		code = 500
	}

	return &MakeBucketDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the make bucket default response
func (o *MakeBucketDefault) WithStatusCode(code int) *MakeBucketDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the make bucket default response
func (o *MakeBucketDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the make bucket default response
func (o *MakeBucketDefault) WithPayload(payload *models.APIError) *MakeBucketDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the make bucket default response
func (o *MakeBucketDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *MakeBucketDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
