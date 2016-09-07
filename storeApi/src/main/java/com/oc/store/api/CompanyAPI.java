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

import com.oc.store.dto.CompanyDTO;

@Path("/company/")
public interface CompanyAPI {
	
	@Path("/companies")
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public Map<String, CompanyDTO> getCompanies();
	
	@Path("/{code}")
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public CompanyDTO getCompany(@PathParam("code") String code);
	
	@POST
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes({MediaType.APPLICATION_JSON})
	public CompanyDTO createCompany(CompanyDTO company);
	
	@PUT
	@Produces({MediaType.APPLICATION_JSON})
	@Consumes({MediaType.APPLICATION_JSON})
	public CompanyDTO updateCompany(CompanyDTO company);
	
	@Path("/{code}")
	@DELETE
	public Response deleteCompany(@PathParam("code") String code);

}
