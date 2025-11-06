package com.Pijamoon.pijamoon_backend.Controller;

import com.Pijamoon.pijamoon_backend.Model.Produto;
import com.Pijamoon.pijamoon_backend.Service.ServicoProduto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*") // permite requisições do front-end (HTML/CSS/JS)
public class ProdutoController {

    private final ServicoProduto servicoProduto;

    public ProdutoController(ServicoProduto servicoProduto) {
        this.servicoProduto = servicoProduto;
    }

    // GET /produtos → retorna todos os produtos
    @GetMapping
    public List<Produto> listarProdutos() {
        return servicoProduto.listarProdutos();
    }

    // GET /produtos/{id} → retorna produto específico
    @GetMapping("/{id}")
    public Produto buscarProduto(@PathVariable long id) {
        return servicoProduto.buscarProduto(id);
    }

    // POST /produtos → adiciona um novo produto (se quiser testar via JSON)
    @PostMapping
    public void adicionarProduto(@RequestBody Produto produto) {
        servicoProduto.listarProdutos().add(produto);
    }
}
