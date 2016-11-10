package com.oc.store.service;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

import com.oc.store.api.StoreAPI;
import com.oc.store.dto.StoreDTO;

public class StoreIMP implements StoreAPI{

	private static Map<String, StoreDTO> storeMap = new HashMap<String, StoreDTO>();
	private static StoreDTO store;
	
	static{
		store = new StoreDTO(1, "5266", "OpenCollab");
		storeMap.put(store.getCode(), store);
		
		store = new StoreDTO(2, "5267", "NWU");
		storeMap.put(store.getCode(), store);
	}
	
	public StoreIMP(){}
	
	public Map<String, StoreDTO> getStores(){
		return storeMap;
	}
	
	public StoreDTO getStore(String code){
		if(storeMap.containsKey(code) == false)
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		return storeMap.get(code);
	}

	public StoreDTO createStore(StoreDTO store) {	
		storeMap.put(store.getCode(), store);
		return storeMap.get(store.getCode());
	}

	public StoreDTO updateStore(StoreDTO store) {
		if(storeMap.containsKey(store.getCode()) == false)
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		storeMap.put(store.getCode(), store);
		return storeMap.get(store.getCode());
	}

	public Response deleteStore(String code) {
		int status = storeMap.remove(code) != null ? 1 : 0;
		return status == 1 ? Response.status(Response.Status.OK).build() : 
							 Response.status(Response.Status.NOT_FOUND).build();
	}
}
