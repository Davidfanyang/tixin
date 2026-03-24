<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const taskInput = document.getElementById("taskInput");</p>
<p class="p1">const addBtn = document.getElementById("addBtn");</p>
<p class="p1">const taskList = document.getElementById("taskList");</p>
<p class="p2"><br></p>
<p class="p1">let tasks = [];</p>
<p class="p2"><br></p>
<p class="p1">function renderTasks() {</p>
<p class="p1">taskList.innerHTML = "";</p>
<p class="p2"><br></p>
<p class="p1">tasks.forEach((task, index) =&gt; {</p>
<p class="p1">const li = document.createElement("li");</p>
<p class="p1">li.className = "task-item";</p>
<p class="p2"><br></p>
<p class="p1">const span = document.createElement("span");</p>
<p class="p1">span.className = "task-text";</p>
<p class="p1">span.textContent = task.text;</p>
<p class="p2"><br></p>
<p class="p1">if (task.completed) {</p>
<p class="p1">span.classList.add("completed");</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">span.addEventListener("click", () =&gt; {</p>
<p class="p1">tasks[index].completed = !tasks[index].completed;</p>
<p class="p1">renderTasks();</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">const deleteBtn = document.createElement("button");</p>
<p class="p1">deleteBtn.className = "delete-btn";</p>
<p class="p1">deleteBtn.textContent = "删除";</p>
<p class="p2"><br></p>
<p class="p1">deleteBtn.addEventListener("click", () =&gt; {</p>
<p class="p1">tasks.splice(index, 1);</p>
<p class="p1">renderTasks();</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">li.appendChild(span);</p>
<p class="p1">li.appendChild(deleteBtn);</p>
<p class="p1">taskList.appendChild(li);</p>
<p class="p1">});</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function addTask() {</p>
<p class="p1">const text = taskInput.value.trim();</p>
<p class="p2"><br></p>
<p class="p1">if (text === "") {</p>
<p class="p1">alert("请输入任务内容");</p>
<p class="p1">return;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">tasks.push({</p>
<p class="p1">text,</p>
<p class="p1">completed: false</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">taskInput.value = "";</p>
<p class="p1">renderTasks();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">addBtn.addEventListener("click", addTask);</p>
<p class="p2"><br></p>
<p class="p1">taskInput.addEventListener("keydown", (event) =&gt; {</p>
<p class="p1">if (event.key === "Enter") {</p>
<p class="p1">addTask();</p>
<p class="p1">}</p>
<p class="p1">});</p>
</body>
</html>
