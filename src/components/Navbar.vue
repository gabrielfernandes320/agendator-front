<template>
  <div>
    <nav class="navigation">
      <ul class="mainmenu">
        <li>
          <a href>Clientes</a>
          <ul class="submenu">
            <li>
              <a href="/#/newclient">Adicionar Cliente</a>
            </li>
            <li>
              <a href="/#/visualizeclients">Visualizar Clientes</a>
            </li>
          </ul>
        </li>
        <li>
          <a href>Roles</a>
          <ul class="submenu">
            <li>
              <a href="#!/neworder">Adicionar Ordem</a>
            </li>
            <li>
              <a href="/#/roles">Visualizar Ordens</a>
            </li>
          </ul>
        </li>
        <li>
          <a href>Tipos de itens</a>
          <ul class="submenu">
            <li>
              <a href="#!/newitemtype">Adicionar tipo de Item</a>
            </li>
            <li>
              <a href="#!/itemtypes">Visualizar tipos de Itens</a>
            </li>
          </ul>
        </li>

        <li>
          <a href>Situações de ordens</a>
          <ul class="submenu">
            <li>
              <a href="#!/neworderstatus">Adicionar situação de ordem</a>
            </li>
            <li>
              <a href="#!/orderstatuses">Visualizar situações de ordens</a>
            </li>
          </ul>
        </li>
        <li>
          <a href>Entre em contato</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.navigation {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #1d1d1d;
  overflow-x: hidden;
  padding-top: 20px;
}

.navigation a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  color: #aca9a9;
  display: block;
}

.navigation {
  width: 300px;
}

.navigation a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px;
  font-size: 28px;
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .navigation {
    padding-top: 15px;
  }
  .navigation a {
    font-size: 18px;
  }
}

.mainmenu {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
}

.mainmenu a:hover {
  background-color: #1b1b1b;
}

.mainmenu li:hover .submenu {
  display: block;
  max-height: 200px;
}

.submenu {
  list-style: none;
  padding-left: 3px;
  font-size: 16px;
  overflow: hidden;
  max-height: 0;
  -webkit-transition: all 0.5s ease-out;
}

.submenu a {
  background-color: #423f3f;
}

.submenu a:hover {
  background-color: #423f3f;
}
</style>