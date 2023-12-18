function add_player() {
  const ul = document.getElementById("ul_conteiner");
  const position = document.getElementById("position").value;
  const name = document.getElementById("player_name").value;
  const number = document.getElementById("number_tshirt").value;

  const confirmacao = confirm(
    "Deseja escalar o jogador: " + name + " " + number + " Posição: " + position
  );

  if (confirmacao) {
    const newPlayer = document.createElement("li");
    newPlayer.id = "player" + number;
    newPlayer.innerText = name + "(" + number + ")" + " / " + position;

    ul.appendChild(newPlayer);
    document.getElementById("number_tshirt").value = "";
    document.getElementById("player_name").value = "";
    document.getElementById("position").value = "";
  }
}

function remove_player() {
  const number = document.getElementById("number_removed").value;
  const player_to_removed = document.getElementById("player" + number);

  const confirmation = confirm(
    "Você deseja excluir o jogador: " + player_to_removed.innerText + "?"
  );
  if (confirmation) {
    document.getElementById("ul_conteiner").removeChild(player_to_removed);
    document.getElementById("number_removed").value = "";
  }
}
