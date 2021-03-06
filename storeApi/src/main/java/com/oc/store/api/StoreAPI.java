package com.oc.store.api;

import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.oc.store.dto.StoreDTO;

@Path("/store/")
public interface StoreAPI {
	
	@Path("/stores")
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public Map<String, StoreDTO> getStores();
	
	@Path("/{code}")
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public StoreDTO getStore(@PathParam("code") String code);
	
	@POST
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes({MediaType.APPLICATION_JSON})
	public StoreDTO createStore(StoreDTO store);
	
	@PUT
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes({MediaType.APPLICATION_JSON})
	public StoreDTO updateStore(StoreDTO store);
	
	@Path("/{code}")
	@DELETE
	public Response deleteStore(@PathParam("code") String code);

}
