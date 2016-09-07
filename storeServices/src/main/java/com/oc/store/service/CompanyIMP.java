package com.oc.store.service;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.client.ResponseProcessingException;
import javax.ws.rs.core.Response;

import com.oc.store.api.CompanyAPI;
import com.oc.store.dto.CompanyDTO;

public class CompanyIMP implements CompanyAPI{

	private static Map<String, CompanyDTO> companyMap = new HashMap<String, CompanyDTO>();
	private static CompanyDTO company;
	
	static{
		company = new CompanyDTO(1, "5266", "OpenCollab");
		companyMap.put(company.getCode(), company);
		
		company = new CompanyDTO(2, "5267", "NWU");
		companyMap.put(company.getCode(), company);
	}
	
	public CompanyIMP(){}
	
	public Map<String, CompanyDTO> getCompanies(){
		return companyMap;
	}
	
	public CompanyDTO getCompany(String code){
		if(companyMap.containsKey(code) == false)
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		return companyMap.get(code);
	}

	public CompanyDTO createCompany(CompanyDTO company) {	
		companyMap.put(company.getCode(), company);
		return companyMap.get(company.getCode());
	}

	public CompanyDTO updateCompany(CompanyDTO company) {
		if(companyMap.containsKey(company.getCode()) == false)
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		companyMap.put(company.getCode(), company);
		return companyMap.get(company.getCode());
	}

	public Response deleteCompany(String code) {
		int status = companyMap.remove(code) != null ? 1 : 0;
		return status == 1 ? Response.status(Response.Status.OK).build() : 
							 Response.status(Response.Status.NOT_FOUND).build();
	}
}
