
  let count = 0;

  let progress = document.getElementById("progress");
  let percent = document.getElementById("percent");
  let btn = document.getElementById("btn");
  let done = document.getElementById("done");

  btn.addEventListener("click", function () {

    count = 0;
    done.style.display = "none";

    let interval = setInterval(function () {

      if (count >= 100) {
        clearInterval(interval);
        done.style.display = "block";
        return;
      }

      count++;

      progress.style.width = count + "%";
      percent.innerText = count + "%";

    }, 40);

  });
