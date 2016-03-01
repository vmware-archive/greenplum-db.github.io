
# Introduction
<p>GPDB virutal memory calculator estimates the best virtual memory settings based on exiting large scale deployments.  The linux kernel is very good at optimizing its own memory, but we still have to ensure we do not overallocation GPDB memory resulting in out of memory events.  This calculator helps the user reserve a conservative amount of memory for kernel while maximizing the amount of memory used by GPDB.</p>
<p>For more information refer to GPDB <a href="http://gpdb.docs.pivotal.io/">documentaiton</a></p>

****

