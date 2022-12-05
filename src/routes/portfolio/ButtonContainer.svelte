





<style>
	#myBtnContainer {
		margin-bottom: 1rem;
		text-align: center;
		position: fixed;
		bottom: 20%;
		left:0;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 1088px) {
		#myBtnContainer {
		
	
		position:initial;
		flex-direction: row;
		display: flex;

	}
	}
	@media (max-width: 688px){
		#myBtnContainer {
		
	
		position:initial;
		flex-direction: row;
		display: flex;

	}
	}
</style>


<div id="myBtnContainer">
	<slot></slot>
</div>