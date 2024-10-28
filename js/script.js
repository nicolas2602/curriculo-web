const conteudoObjetivo = document.getElementById("conteudoObjetivo");
const conteudoExeProf = document.getElementById("conteudoExeProf");
const conteudoExeAcad = document.getElementById("conteudoExeAcad");
const conteudoCursos = document.getElementById("conteudoCursos");
const conteudoProj = document.getElementById("conteudoProj");

const objetivoShow = document.getElementById("objetivoShow");
const expeProfissionalShow = document.getElementById("expeProfissionalShow");
const expeAcademicaShow = document.getElementById("expeAcademicaShow");
const cursosShow = document.getElementById("cursosShow");
const projShow = document.getElementById("projShow");

function mostrarConteudo(id, setaId) {
    id.classList.toggle("show");
    seta = document.querySelector("#"+setaId);
    if (seta) {
        seta.classList.toggle("ativa"); 
    }
}

objetivoShow.addEventListener("click", function(){
    mostrarConteudo(conteudoObjetivo, "conteudoObjetivoSeta");
});

expeProfissionalShow.addEventListener("click", function(){
    mostrarConteudo(conteudoExeProf, "conteudoExeProfSeta");
});

expeAcademicaShow.addEventListener("click", function(){
    mostrarConteudo(conteudoExeAcad, "conteudoExeAcadSeta");
});

cursosShow.addEventListener("click", function(){
    mostrarConteudo(conteudoCursos, "conteudoCursosSeta");
});

projShow.addEventListener("click", function(){
    mostrarConteudo(conteudoProj, "conteudoProjSeta");
});
