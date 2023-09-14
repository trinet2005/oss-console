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
// Editing this file might prove futile when you re-run the generate command

import (
	"net/http"

	"github.com/go-openapi/runtime/middleware"

	"github.com/trinet2005/oss-console/models"
)

// DeleteBucketEventHandlerFunc turns a function with the right signature into a delete bucket event handler
type DeleteBucketEventHandlerFunc func(DeleteBucketEventParams, *models.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn DeleteBucketEventHandlerFunc) Handle(params DeleteBucketEventParams, principal *models.Principal) middleware.Responder {
	return fn(params, principal)
}

// DeleteBucketEventHandler interface for that can handle valid delete bucket event params
type DeleteBucketEventHandler interface {
	Handle(DeleteBucketEventParams, *models.Principal) middleware.Responder
}

// NewDeleteBucketEvent creates a new http.Handler for the delete bucket event operation
func NewDeleteBucketEvent(ctx *middleware.Context, handler DeleteBucketEventHandler) *DeleteBucketEvent {
	return &DeleteBucketEvent{Context: ctx, Handler: handler}
}

/*
	DeleteBucketEvent swagger:route DELETE /buckets/{bucket_name}/events/{arn} Bucket deleteBucketEvent

Delete Bucket Event
*/
type DeleteBucketEvent struct {
	Context *middleware.Context
	Handler DeleteBucketEventHandler
}

func (o *DeleteBucketEvent) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewDeleteBucketEventParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *models.Principal
	if uprinc != nil {
		principal = uprinc.(*models.Principal) // this is really a models.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}
