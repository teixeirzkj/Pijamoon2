package com.Pijamoon.pijamoon_backend.Service;

import com.Pijamoon.pijamoon_backend.Model.Produto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicoProduto {
private List<Produto> produtos = new ArrayList<>();


public ServicoProduto() {
    produtos.add(new Produto(1l,"Pijama rosa","Pijama confortável",24,78.99));
}
public List<Produto> listarProdutos(){
    return produtos;
}
public Produto buscarProduto(long id){
    for (Produto produto : produtos) {
        if (produto.getId() == id){
            return produto;
        }
    }
    return null;
}

}
